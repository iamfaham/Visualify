import { getAllImages } from '@/lib/actions/image.actions';
import HomeClient from '@/components/shared/HomeClient'; // Adjust the path as necessary

const Home = async ({ searchParams }:any) => {
  const page = Number(searchParams?.page) || 1;
  const searchQuery = (searchParams?.query as string) || '';
  const images = await getAllImages({ page, searchQuery });

  return (
    <HomeClient
      images={images?.data}
      totalPages={images?.totalPage}
      page={page}
    />
  );
};

export default Home;
