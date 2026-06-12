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
  const options = product.node.options || [];
  const [selectedVariantId, setSelectedVariantId] = useState<string>(variants[0]?.id);
  const variant = variants.find((v: any) => v.id === selectedVariantId) ?? variants[0];
  const images = product.node.images.edges.map((e: any) => e.node);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

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

  // Helper to find variant by options
  const findVariantByOptions = (selectedValues: Record<string, string>) => {
    return variants.find((v: any) => 
      v.selectedOptions.every((opt: any) => selectedValues[opt.name] === opt.value)
    );
  };

  const currentOptions = variant.selectedOptions.reduce((acc: Record<string, string>, opt: any) => {
    acc[opt.name] = opt.value;
    return acc;
  }, {});

  const handleOptionChange = (optionName: string, value: string) => {
    const nextOptions = { ...currentOptions, [optionName]: value };
    const nextVariant = findVariantByOptions(nextOptions);
    if (nextVariant) {
      setSelectedVariantId(nextVariant.id);
      // If variant has an image, we could switch to it here
      // For now, we just keep the active image or switch if we implement variant-image mapping
    }
  };

  return (
    <section className="mx-auto grid max-w-7xl gap-12 px-6 pt-12 pb-24 md:grid-cols-2 md:pt-20">
      <div className="space-y-6">
        <div className="aspect-square overflow-hidden rounded-3xl bg-secondary/10">
          <img 
            src={images[activeImageIndex]?.url || images[0]?.url} 
            alt={images[activeImageIndex]?.altText || product.node.title} 
            className="h-full w-full object-cover transition-opacity duration-300" 
          />
        </div>
        {images.length > 1 && (
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {images.map((img: any, idx: number) => (
              <button
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className={`relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl border-2 transition-all ${
                  activeImageIndex === idx ? "border-ink" : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <img src={img.url} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>
      <div>
        <Link to="/store" className="text-sm text-muted-foreground hover:text-foreground">
          ← Back to store
        </Link>
        <h1 className="mt-4 text-display text-4xl md:text-6xl">{product.node.title}</h1>
        <div className="mt-4 text-3xl font-semibold text-primary">
          {variant.price.currencyCode} {parseFloat(variant.price.amount).toFixed(2)}
        </div>
        
        {options.length > 0 && (
          <div className="mt-8 space-y-6">
            {options.map((option: any) => (
              <div key={option.name}>
                <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">{option.name}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {option.values.map((value: string) => {
                    const isSelected = currentOptions[option.name] === value;
                    return (
                      <button
                        key={value}
                        onClick={() => handleOptionChange(option.name, value)}
                        className={`rounded-full border px-6 py-2 text-sm transition-all ${
                          isSelected 
                            ? "border-ink bg-ink text-cream" 
                            : "border-secondary/20 hover:border-ink"
                        }`}
                      >
                        {value}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}

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
