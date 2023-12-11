import AboutCard from "@/components/AboutCard";
import Layout from "@/components/Layout";

export default function About() {
  const teamName = [
    {id:1, name: 'Lyzander Marciano Andrylie', npm: 2106750755},
    {id:2, name: 'Muhammad Hafizha Dhiyaulhaq', npm: 2106750723},
    {id:3, name: 'Felix Tjahyadi', npm: 2106638614},
    {id:4, name: 'Fadlan Ariel Fathurrahman', npm: 2106750673},
    {id:5, name: 'Rahmat Bryan Naufal', npm: 2106635650}
  ]
  return (
    <Layout>
      <div className="flex flex-col items-center mt-8">
        <h1 className="text-4xl text-center font-bold mb-8">Our Team</h1>
          <div className="flex flex-wrap justify-center">
            {teamName.map((member) => 
                <AboutCard key={member.id} member={member}/>
            )}
          </div>
      </div>
    </Layout>
  )
}