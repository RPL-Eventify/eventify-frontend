import { Card } from 'flowbite-react';

const AboutCard = ({member}) => {
  const getAvatar = (name) => `https://robohash.org/${name}.png`
  return (
    <Card className="max-w-xs m-4 h-full hover:shadow-lg transition duration-300" imgSrc={getAvatar(member.npm)} horizontal>
      <div className="flex flex-col h-full">
        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {member.name}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
            {member.npm}
        </p>
      </div>
    </Card>
  );
}

export default AboutCard;