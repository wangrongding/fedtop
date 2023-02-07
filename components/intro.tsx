import { CMS_NAME } from "../lib/constants";

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-4xl font-bold tracking-tighter leading-tight md:pr-8">
        荣顶的个人博客
      </h1>
      <div className="flex gap-4 underline hover:text-blue-600 duration-200 transition-colors">
        <a href="https://nextjs.org/">技术</a>
        <a href="https://nextjs.org/">生活</a>
        <a href="https://nextjs.org/">关于我</a>

        <a href="https://nextjs.org/">Github</a>
      </div>
      {/* <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        A statically generated blog example using{" "}
        <a
          href="https://nextjs.org/"
          className="underline hover:text-blue-600 duration-200 transition-colors"
        >
          Next.js
        </a>{" "}
        and {CMS_NAME}.
      </h4> */}
    </section>
  );
};

export default Intro;
