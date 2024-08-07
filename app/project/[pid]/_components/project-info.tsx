import Image from "next/image";
import Markdown from "react-markdown";
import Link from "next/link";
import { ProjectRecord } from "@/lib/types";
import LinkTree from "./linktree";

const Tags = ({ tags }: { tags: Record<string, string> }) => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {Object.keys(tags).map((key, index) => (
        <Link
          href={`/category/${key}`}
          className="flex h-6 shrink-0 items-center justify-center gap-2 rounded-full bg-[#005253] px-2 py-1 text-xs font-medium text-[#abf8f3]"
          key={index}
        >
          {tags[key]}
        </Link>
      ))}
    </div>
  );
};

export default function ProjectInfo({
  projectData,
}: {
  projectData: ProjectRecord;
}) {
  if (!projectData) return null;

  const { profile } = projectData;

  return (
    <div className="flex flex-col gap-4 text-[#ECEBE9] lg:gap-0">
      <div className="flex items-center gap-4">
        <Image
          src={profile?.image?.url}
          alt={profile?.name}
          className="pointer-events-none size-[80px] rounded-full bg-gray-900 object-cover lg:size-[120px]"
          width={120}
          height={120}
        />
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-medium lg:text-[32px] lg:font-bold">
            {profile?.name}
          </h2>
          <p className="text-xs font-medium">{profile?.tagline}</p>
          <Tags tags={profile.tags} />
        </div>
      </div>

      <div className="flex flex-col gap-4 lg:ml-[134px]">
        <div className="max-w-fit lg:hidden">
          <LinkTree project={projectData} direction="left" />
        </div>
        <div className="prose prose-invert min-h-[250px] lg:prose-lg">
          <Markdown>{profile?.description}</Markdown>
        </div>
      </div>
    </div>
  );
}
