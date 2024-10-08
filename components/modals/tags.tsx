"use client";

import { useTagsModalStore } from "@/store/tags-modal-store";
import * as Dialog from "@radix-ui/react-dialog";
import Tags from "@/app/project/[pid]/_components/tags";

interface TagsModalProps {
  tags: Record<string, string>;
}

function TagsModal({ tags }: TagsModalProps) {
  const { isOpen, setIsOpen } = useTagsModalStore();

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <button className="mt-4 flex w-full cursor-pointer items-center justify-between truncate rounded-lg border border-[#3F3F3F] bg-[#1A1A17] px-4 py-2 text-white md:hidden">
          Explore All Categories
          <i className="bi bi-chevron-down flex h-4 w-4 items-center justify-center text-xl" />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/80 backdrop-blur-[.375rem]" />
        <Dialog.Content className="fixed left-[50%] top-[50%] z-50 max-h-[85vh] w-[90vw] max-w-[28.125rem] translate-x-[-50%] translate-y-[-50%] overflow-y-auto rounded-lg bg-[#1A1A17] px-6 py-2 focus:outline-none">
          <Dialog.Title className="mb-2 flex items-center justify-between">
            <span className="text-lg font-medium">Explore All Categories</span>
            <Dialog.Close>
              <i className="bi bi-x text-2xl" />
            </Dialog.Close>
          </Dialog.Title>
          <Dialog.Description className="hidden" />
          <div className="mb-2 flex flex-col gap-2">
            <Tags tags={tags} />
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default TagsModal;
