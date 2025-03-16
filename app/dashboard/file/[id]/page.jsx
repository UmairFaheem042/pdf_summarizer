import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

const PreviewSummary = () => {
  const data = {
    id: 1,
    name: "Next.js Documentation for Beginners",
    time: "3 minutes ago",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    status: "Processing",
    file: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, aliquid deleniti quibusdam dignissimos tempora minima quam non sed sint nihil aliquam veniam exercitationem possimus quos illum nemo esse nisi recusandae cupiditate voluptas aspernatur natus! Officiis inventore similique blanditiis esse non, ducimus optio eum. Excepturi voluptate at ut maiores ipsam eum commodi repudiandae accusamus laboriosam. Illo odit hic sed debitis error similique culpa repellat. Sequi, blanditiis? Dolorum repellat dolor ipsa repellendus impedit nam aspernatur, blanditiis iusto delectus eveniet omnis sapiente expedita quisquam tempora optio quia perferendis dicta. Architecto culpa nobis perferendis odit fugiat accusamus. Nesciunt nulla incidunt perspiciatis repudiandae amet enim temporibus architecto voluptate perferendis voluptatem nihil quam, quis sint ut hic officia dolores. Et, nemo in. Ea vel exercitationem quos ut iste fugit officia saepe eum maiores dolorem expedita dolore, distinctio libero tenetur voluptate nam quas doloremque aliquid repudiandae ipsa optio sed eaque, laboriosam nulla? Vero optio commodi a quia, atque enim hic praesentium quae veniam reprehenderit sapiente provident suscipit esse tenetur voluptatibus totam nesciunt eum consequuntur impedit aperiam! Voluptates magni ipsam quis reprehenderit explicabo dolor natus harum odio deleniti ea ullam, soluta nulla, libero illo mollitia. Earum natus incidunt velit repudiandae? Tempore aut, rem voluptatum accusantium molestias vel quibusdam officia, labore sit totam nostrum, voluptas quia! Minima magni nostrum exercitationem vitae ratione qui, maxime quo. Error incidunt molestiae praesentium minus accusamus harum quo consectetur, unde suscipit dolor assumenda iure eum at aliquam quidem eveniet consequatur fuga architecto? Reprehenderit in error incidunt beatae assumenda, dolorum repellendus esse eligendi iure impedit ex numquam velit asperiores illo architecto ipsum necessitatibus laboriosam quis totam, suscipit sit atque tempora porro! Possimus rerum esse illo dolorum, fugiat sequi voluptates. Accusamus praesentium blanditiis, illo sunt obcaecati vitae deserunt numquam atque mollitia reprehenderit impedit quam placeat. Libero at totam corrupti! At aspernatur aliquid doloremque commodi iure assumenda officiis vitae perferendis minus mollitia amet distinctio vero tempora fuga voluptatem, libero, consequuntur dolorem? Numquam libero praesentium dolores quae, architecto, at voluptatibus, aliquam repellat veritatis esse aperiam. Ratione quisquam possimus corrupti quibusdam deleniti. Impedit, quidem eaque? Sunt veniam facere optio fugit. Aliquam sequi aperiam soluta quidem necessitatibus aliquid, doloremque totam incidunt repellat porro, tenetur modi nam non optio repudiandae vel dolorum laudantium ratione consectetur rerum minima dolor vero. Nam, perspiciatis fugit repudiandae tempore, cupiditate ratione quo commodi esse eveniet pariatur fuga, ullam ad libero. Ducimus ab, quae explicabo ipsa inventore quasi commodi odio repellat reprehenderit ex repudiandae neque earum cum itaque ullam a nemo nesciunt iusto vel necessitatibus omnis atque, mollitia recusandae doloremque. Itaque reiciendis odio officia perspiciatis culpa? Voluptatem hic sint sapiente, accusamus quo, sit quas atque error fuga magni rerum dolores vero beatae, omnis commodi at soluta nostrum quaerat aliquid ipsum tenetur suscipit unde voluptates pariatur. Nobis magni repellendus quia cupiditate dolorum consequuntur doloremque voluptas sint nam impedit, sequi laboriosam nemo natus pariatur eum! Iure odio a nihil quae accusamus libero quis perspiciatis vitae, officia modi totam beatae inventore tempore expedita impedit, ullam, asperiores quaerat iste veritatis rem dolore nisi dolores! Tempora, enim autem doloremque possimus vero veniam.",
  };

  return (
    <div className="min-h-[calc(100vh-60px)] max-w-[800px] mx-auto p-6 my-8">
      <header className="flex justify-between items-center mb-10">
        <Link href="/dashboard">
          <Button className="cursor-pointer">Back</Button>
        </Link>
        <Button variant="destructive">Delete</Button>
      </header>
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-3xl font-bold text-center">{data.name}</h1>
        <p className="text-sm font-bold text-muted-foreground">{data.time}</p>
        <div className="w-full mt-8">
          <p className="text-md font-normal text-justify text-muted-foreground flex flex-col gap-2">
            <span className=" flex  justify-end">
              <Copy className="w-4 h-4 cursor-pointer" />
            </span>
            {data.summary}
          </p>
        </div>
        <div className="mt-4 flex gap-2">
          <Button variant="outline" className="cursor-pointer">
            Download Summary
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PreviewSummary;
