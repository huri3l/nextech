import Image from 'next/image';

export const Carousel = () => {
  return (
    <div>
      <h3>Lançamentos</h3>
      <hr />
      <div>
        <ul>
          <li>
            <Image src="/tmp/eclipse.png" alt="Foto do Smartphone Eclipse" width={5} height={5} />
            <h4>Eclipse</h4>
          </li>
          <li>
            <Image src="/tmp/sky.png" alt="Foto do Smartphone Sky" width={5} height={5} />
            <h4>Sky</h4>
          </li>
        </ul>
        <div>steps</div>
      </div>
    </div>
  );
};
