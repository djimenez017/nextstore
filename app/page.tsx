import Product from "@/components/Product";
import Stripe from "stripe";

const getProducts = async () => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2022-11-15",
  });
  const products = await stripe.products.list();

  const productWithPrices = await Promise.all(
    products.data.map(async (product) => {
      const prices = await stripe.prices.list({ product: product.id });
      const price = prices.data.length > 0 ? prices.data[0].unit_amount : null;
      return {
        ...product,
        price,
      };
    })
  );
  return productWithPrices;
};

export default async function Home() {
  const products = await getProducts();
  console.log(products);
  return (
    <main>
      {products.map((product) => {
        return <Product {...product} />;
      })}
    </main>
  );
}
