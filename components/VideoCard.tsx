import Link from "next/link";
import Image from "next/image";

const VideoCard = ({
    id, 
    title, 
    thumbnail, 
    userImg, 
    username,
    createdAt,
    views,
    visibility,
    duration
}: VideoCardProps) => {

    return (
        <Link href={`/video/${id}`} className="video-card">
            <Image src={thumbnail} alt="thumbnail" width={290} height={160}
                   className="thumbnail"
            />
        </Link>
    );
};

export default VideoCard;