import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { useSeo } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { localProducts } from "@/data/products";
import { useCartStore } from "@/stores/cartStore";

export default function ProductPage() {
  const { handle = "" } = useParams<{ handle: string }>();
  
  const product = localProducts.find((p) => p.node.handle === handle);
  
  useSeo({
    title: `${product?.node.title ?? "Product"} — Joysmart Store`,
    description: "Branded merchandise from Joysmart Branding Services.",
  });

  return (
    <SiteLayout>
      {product ? (
        <ProductDetail product={product} />
      ) : (
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <h1 className="text-display text-5xl">Product not found</h1>
          <Link to="/store" className="mt-6 inline-flex rounded-full bg-ink px-6 py-3 text-sm font-medium text-cream">
            ← Back to store
          </Link>
        </div>
      )}
    </SiteLayout>
  );
}

function ProductDetail({ product }: { product: any }) {
  const addItem = useCartStore((s) => s.addItem);
  const isLoading = useCartStore((s) => s.isLoading);
  
  const variants = product.node.variants.edges.map((e: any) => e.node);
  const [selectedVariantId, setSelectedVariantId] = useState<string>(variants[0]?.id);
  const variant = variants.find((v: any) => v.id === selectedVariantId) ?? variants[0];
  const images = product.node.images.edges.map((e: any) => e.node);

  const handleAdd = async () => {
    if (!variant) return;
    await addItem({
      product,
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
          <img src={images[0]?.url} alt={images[0]?.altText ?? product.node.title} className="h-full w-full object-cover" />
        </div>
      </div>
      <div>
        <Link to="/store" className="text-sm text-muted-foreground hover:text-foreground">
          ← Back to store
        </Link>
        <h1 className="mt-4 text-display text-4xl md:text-6xl">{product.node.title}</h1>
        <div className="mt-4 text-3xl font-semibold text-primary">
          {variant.price.currencyCode} {parseFloat(variant.price.amount).toFixed(2)}
        </div>
        {product.node.description && (
          <p className="mt-6 whitespace-pre-line text-muted-foreground">{product.node.description}</p>
        )}

        <Button onClick={handleAdd} size="lg" disabled={isLoading || !variant?.availableForSale} className="mt-8 w-full md:w-auto">
          {!variant?.availableForSale ? "Sold out" : isLoading ? "Loading..." : "Add to cart"}
        </Button>
      </div>
    </section>
  );
}
