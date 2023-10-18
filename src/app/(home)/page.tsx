
import Image from "next/image";
import Categories from "./components/categories";
import { prismaClient } from "@/lib/prisma";
import ProductList from "./components/product-list";

export default async function Home() {
const deals = await prismaClient.product.findMany({
  where: {
    discountPercentage: {
      gt: 0,
    },
  },
})

  return (
    <div className="">
      <Image
        src="/banner-inicial-home-01.png"
        height={0}
        width={0}
        alt="Até 55% de desconto esse mês!"
        className="h-auto w-full px-5 py-4"
        sizes="100vw"
      />
      <div className="mt-8 px-5">
        <Categories />
      </div>
      <div className="mt-8">
        <p className="font-bold uppercase pl-5 mb-3 ">Ofertas</p>
        <ProductList products={deals} />
      </div>
      <Image
        src="/banner-home-02.png"
        height={0}
        width={0}
        alt="Até 55% de desconto em mouses!"
        className="h-auto w-full px-5 py-4"
        sizes="100vw"
      />
    </div>
  );
}
