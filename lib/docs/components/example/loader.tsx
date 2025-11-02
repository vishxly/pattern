import {
  Loader,
  LoaderEllipsis,
  LoaderCircleFilled,
} from "@/lib/docs/ui/loader";

export const LoaderVariantsExample = () => {
  return (
    <div className="w-full max-w-lg space-y-6">
      <div className="grid grid-cols-3 gap-6 items-center">
        <div className="flex flex-col items-center gap-2">
          <Loader variant="circle" size={28} />
          <span className="text-xs text-gray-500">Circle</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Loader variant="ring" size={28} />
          <span className="text-xs text-gray-500">Ring</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Loader variant="bars" size={28} />
          <span className="text-xs text-gray-500">Bars</span>
        </div>
      </div>
    </div>
  );
};

export const LoaderDirectImportsExample = () => {
  return (
    <div className="w-full max-w-md space-y-4">
      <div className="flex items-center gap-4">
        <Loader
          variant="ring"
          size={32}
          speed="fast"
          color="#3b82f6"
          aria-label="Processing request"
        />
        <span className="text-sm text-gray-600 dark:text-gray-400">
          Ring loader with custom options
        </span>
      </div>

      <div className="flex items-center gap-4">
        <LoaderEllipsis size={20} speed="slow" />
        <span className="text-sm text-gray-600 dark:text-gray-400">
          Direct ellipsis import
        </span>
      </div>

      <div className="flex items-center gap-4">
        <LoaderCircleFilled size={40} speed="fast" />
        <span className="text-sm text-gray-600 dark:text-gray-400">
          Direct circle filled import
        </span>
      </div>
    </div>
  );
};
