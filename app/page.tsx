import roomsData from '@/data/rooms.json';
import { Room } from '@/types/Room';
import { RoomCard } from '@/components/RoomCard';
import { Heading } from '@/components/Heading';

export default function Home() {
  const rooms: Room[] = roomsData;

  return (
    <>
      <Heading title='Available rooms' />
      {rooms.length > 0 ? (
        rooms.map((room) => <RoomCard key={room.$id} room={room} />)
      ) : (
        <p>No rooms available at the moment</p>
      )}
    </>
  );
}
