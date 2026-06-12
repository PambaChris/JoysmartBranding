import { Link } from "react-router-dom";
import { SiteLayout } from "@/components/SiteLayout";
import { useSeo } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { localProducts } from "@/data/products";
import { useCartStore } from "@/stores/cartStore";

export default function StorePage() {
  useSeo({
    title: "Store — Joysmart Branding Services",
    description: "Shop branded promotional merchandise online — polos, premium caps, mugs, glasses and more.",
    canonical: "/store",
    meta: [
      { property: "og:title", content: "Store — Joysmart Branding Services" },
      { property: "og:description", content: "Shop branded promotional merchandise online." },
    ],
  });
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-10 md:pt-24">
        <div className="text-xs font-semibold uppercase tracking-widest text-primary">Online Store</div>
        <h1 className="mt-3 text-display text-5xl md:text-7xl">
          Shop our <span className="text-primary">branded goods.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted-foreground">
          Order ready-stock items directly. Need custom branding? Add items to cart and we'll confirm artwork before production.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {localProducts.map((p) => (
            <ProductCard key={p.node.id} product={p} />
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}

function ProductCard({ product }: { product: any }) {
  const addItem = useCartStore((s) => s.addItem);
  const isLoading = useCartStore((s) => s.isLoading);
  const variant = product.node.variants.edges[0]?.node;
  const image = product.node.images.edges[0]?.node;
  const price = product.node.priceRange.minVariantPrice;

  const handleAdd = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
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
    <Link
      to={`/product/${product.node.handle}`}
      className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-shadow hover:shadow-brand"
    >
      <div className="aspect-square overflow-hidden bg-secondary/10">
        {image.url ? (
          <img
            src={image.url}
            alt={image?.altText ?? product.node.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-muted-foreground">
            <ShoppingBag className="h-12 w-12" />
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="text-display text-xl leading-tight">{product.node.title}</h3>
        <div className="text-lg font-semibold text-primary">
          {price.currencyCode} {parseFloat(price.amount).toFixed(2)}
        </div>
        <Button onClick={handleAdd} disabled={isLoading || !variant?.availableForSale} className="mt-auto">
          {!variant?.availableForSale ? "Sold out" : isLoading ? "Loading..." : "Add to cart"}
        </Button>
      </div>
    </Link>
  );
}
