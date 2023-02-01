import GradientLayout from "../components/GradientLayout";

const Home = () => {
  return (
    <GradientLayout
      color="green"
      roundImage
      subtitle="Profile"
      title="Pedro Lucena"
      description="15 public playlists"
      image="https://dl.dropboxusercontent.com/s/bgiv0ssz3xpotz9/peep.png?dl=0"
    >
      <div>Home Page</div>
    </GradientLayout>
  );
};

export default Home;
