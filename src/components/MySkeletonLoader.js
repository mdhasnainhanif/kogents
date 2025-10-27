// components/MySkeletonLoader.js
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'; // Import the CSS

const MySkeletonLoader = () => {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton circle height={48} width={48} />
      <div className="space-y-2">
        <Skeleton count={1} width={250} />
        <Skeleton count={1} width={200} />
      </div>
    </div>
  );
};

export default MySkeletonLoader;