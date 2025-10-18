import { fetchMarketNews } from "@/libs/finnhub-api/fetch-market-news"
import Image from "next/image";
import Link from "next/link";
import emptyPicture from "../public/broken_picture.png"

function convertDate(datetime) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(datetime * 1000);
    return date.toLocaleDateString("en-GB", options);
}

export const DisplayContent = async () => {
    const news = await fetchMarketNews()
    const slicedNews = news.slice(0, 12); //display 12 news items
  return (
    <section className="w-full">
      {slicedNews.length === 0 ? (
        <p className="text-center lg:text-right font-medium">
          Something went wrong. Please try again later.
        </p>
      ) : (
        <article className="flex flex-wrap gap-x-6 gap-y-8">
          {slicedNews.map((item, index) => (
            <div
              className="flex-grow md:basis-[317px] basis-full min-w-min p-4 hover:bg-[#2A283E] cursor-pointer"
              key={index}
            >
              <Link
                href={item.url}
                target="_blank"
                className="flex md:flex-col flex-row items-center md:items-start md:gap-2 gap-4 w-full"
              >
                <div className="md:w-full md:mx-auto w-[100px] md:h-[179px] h-[100px]">
                  <Image
                    src={item.image === "" ? emptyPicture : item.image}
                    alt={`${item.source} logo`}
                    className="w-full h-full object-cover md:object-fill"
                    width={285}
                    height={179}
                  />
                </div>
                <div className="w-full flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="opacity-70 uppercase text-xs">
                      {item.source}
                    </span>
                    <span className="opacity-70 uppercase text-xs">
                      {convertDate(item.datetime)}
                    </span>
                  </div>
                  <p className="text-xl font-medium">{item.headline}</p>
                </div>
              </Link>
            </div>
          ))}
        </article>
      )}
    </section>
  );
}
