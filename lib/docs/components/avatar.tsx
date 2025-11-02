import { AvatarGroup } from "@/lib/docs/ui/avatar";
const AvatarDemo = () => {
  const sampleAvatars = [
    {
      id: 1,
      name: "Alex",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 2,
      name: "Jack",
      src: "https://i.pinimg.com/736x/87/ef/33/87ef33097caeac96fdef8ab2e71db3dd.jpg",
    },
    {
      id: 3,
      name: "Mike",
      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 4,
      name: "Emma",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 5,
      name: "Maxine",
      src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 6,
      name: "David",
      src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 7,
      name: "Lisa",
      src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
    },
  ];

  return (
    <div className="min-h-screen  p-8 flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <h1 className="text-white text-2xl font-light mb-2 tracking-wide">
          HOVER AVATAR COMPONENT
        </h1>
        <p className="text-gray-400 text-sm mb-16">
          Hover over any avatar to see the effect
        </p>

        {/* Main Avatar Group */}
        <div className="mb-16">
          <AvatarGroup
            avatars={sampleAvatars}
            size={80}
            className="mb-8"
            max={7}
            enableDynamicColor={true}
          />
        </div>
      </div>
    </div>
  );
};

export default AvatarDemo;
