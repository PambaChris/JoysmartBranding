import { Link, useParams } from "react-router-dom";
import { useSuspenseQuery, queryOptions } from "@tanstack/react-query";
import { useState, Suspense } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { useSeo } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { fetchProductByHandle } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";

const productQuery = (handle: string) =>
  queryOptions({
    queryKey: ["shopify", "product", handle],
    queryFn: () => fetchProductByHandle(handle),
  });

export default function ProductPage() {
  const { handle = "" } = useParams<{ handle: string }>();
  useSeo({
    title: `${handle} — Joysmart Store`,
    description: "Branded merchandise from Joysmart Branding Services.",
  });
  return (
    <SiteLayout>
      <Suspense
        fallback={
          <div className="mx-auto flex max-w-7xl items-center justify-center px-6 py-24">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        }
      >
        <ProductDetail handle={handle} />
      </Suspense>
    </SiteLayout>
  );
}

function ProductDetail({ handle }: { handle: string }) {
  const { data: product } = useSuspenseQuery(productQuery(handle));
  const addItem = useCartStore((s) => s.addItem);
  const isLoading = useCartStore((s) => s.isLoading);

  if (!product) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="text-display text-5xl">Product not found</h1>
        <Link to="/store" className="mt-6 inline-flex rounded-full bg-ink px-6 py-3 text-sm font-medium text-cream">
          ← Back to store
        </Link>
      </div>
    );
  }

  type Variant = { id: string; title: string; price: { amount: string; currencyCode: string }; availableForSale: boolean; selectedOptions: Array<{ name: string; value: string }> };
  type Image = { url: string; altText: string | null };
  const variants: Variant[] = product.variants.edges.map((e: { node: Variant }) => e.node);
  const [selectedVariantId, setSelectedVariantId] = useState<string>(variants[0]?.id);
  const variant = variants.find((v) => v.id === selectedVariantId) ?? variants[0];
  const images: Image[] = product.images.edges.map((e: { node: Image }) => e.node);

  // Local image overrides
  const localImageMap: Record<string, string> = {
    "branded-cap": "/Branded caps.jpg",
    "premium-polo-t-shirt": "/premium polo.jpg",
    "round-neck-t-shirt": "/round neck.jpg",
    "reflector-safety-wear": "/safetywear.jpg",
    "branded-hoodie": "/brandedhoodies.jpg",
    "branded-half-jacket": "/brandedhalfjacket.jpg",
    "outdoor-branding-solutions": "/3doutdoor.jpg",
    "corporate-promotional-fabrics": "/promotional.jpg",
    "branded-leso-fabric": "/lesso-and-fabrics.jpg",
    "graphic-design-services": "/design.jpg",
    "branded-umbrella": "/brandedmugs.jpg",
    "branded-water-bottle": "/brandedwaterbottles.jpg",
  };

  // Local title overrides
  const localNameMap: Record<string, string> = {
    "branded-umbrella": "Branded Mugs",
    "branded-water-bottle": "Branded Glasses",
  };

  const mainImageUrl = localImageMap[handle] || images[0]?.url;
  const displayTitle = localNameMap[handle] || product.title;

  const productNode = {
    node: {
      ...product,
      priceRange: product.priceRange,
      images: product.images,
      variants: product.variants,
      options: product.options,
    },
  };

  const handleAdd = async () => {
    if (!variant) return;
    await addItem({
      product: productNode,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions || [],
    });
  };

  return (
    <section className="mx-auto grid max-w-7xl gap-12 px-6 pt-12 pb-24 md:grid-cols-2 md:pt-20">
      <div className="space-y-4">
        <div className="aspect-square overflow-hidden rounded-3xl bg-secondary/10">
          {mainImageUrl ? (
            <img src={mainImageUrl} alt={images[0]?.altText ?? displayTitle} className="h-full w-full object-cover" />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-muted-foreground">
              <Loader2 className="h-8 w-8 animate-spin" />
            </div>
          )}
        </div>
        {images.length > 1 && (
          <div className="grid grid-cols-4 gap-3">
            {images.slice(1, 5).map((img: Image, i: number) => (
              <div key={i} className="aspect-square overflow-hidden rounded-xl bg-secondary/10">
                <img src={img.url} alt={img.altText ?? ""} className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        )}
      </div>
      <div>
        <Link to="/store" className="text-sm text-muted-foreground hover:text-foreground">
          ← Back to store
        </Link>
        <h1 className="mt-4 text-display text-4xl md:text-6xl">{displayTitle}</h1>
        <div className="mt-4 text-3xl font-semibold text-primary">
          {variant.price.currencyCode} {parseFloat(variant.price.amount).toFixed(2)}
        </div>
        {product.description && (
          <p className="mt-6 whitespace-pre-line text-muted-foreground">{product.description}</p>
        )}

        {variants.length > 1 && (
          <div className="mt-8">
            <div className="text-sm font-medium">Options</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {variants.map((v: Variant) => (
                <button
                  key={v.id}
                  onClick={() => setSelectedVariantId(v.id)}
                  disabled={!v.availableForSale}
                  className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                    v.id === selectedVariantId
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border hover:border-foreground"
                  } ${!v.availableForSale ? "opacity-40" : ""}`}
                >
                  {v.title}
                </button>
              ))}
            </div>
          </div>
        )}

        <Button onClick={handleAdd} size="lg" disabled={isLoading || !variant?.availableForSale} className="mt-8 w-full md:w-auto">
          {!variant?.availableForSale ? "Sold out" : isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Add to cart"}
        </Button>
      </div>
    </section>
  );
}
