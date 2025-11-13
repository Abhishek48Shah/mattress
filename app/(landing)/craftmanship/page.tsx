import Craftsmanship from "@/components/Craftsmanship/Craftsmanship";

const valid_product = ["mattress", "bedhead", "bedbase"] as const;
type ProductName = (typeof valid_product)[number];
export default async function Craftmanship({
    params,
}: {
    params: { product_name?: string };
}) {
    const product_name = (params?.product_name || "").trim().toLowerCase();
    if (!valid_product.includes(product_name as ProductName)) {
        return <h1></h1>;
    }
    try {
        const response = await fetch(
            `/api/craftmanship?product_name=${product_name}`,
            { cache: " force-cache" }
        );
        const data = await response.json();
        return <Craftsmanship data={data} />;
    } catch (err: any) {
        return <h1>Error</h1>;
    }
}
