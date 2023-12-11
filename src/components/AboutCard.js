import { Card } from 'flowbite-react';

const AboutCard = ({ member }) => {
  const getAvatar = (name) => `https://robohash.org/${name}.png`;
  return (
    <Card
      className="m-4 h-full max-w-xs transition duration-300 hover:shadow-lg"
      imgSrc={getAvatar(member.npm)}
      horizontal
    >
      <div className="flex h-full flex-col">
        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {member.name}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {member.npm}
        </p>
      </div>
    </Card>
  );
};

export default AboutCard;
