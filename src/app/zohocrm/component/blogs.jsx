import Image from 'next/image';

function Blogs() {
  const data = [
    {
      img: '/blog.png',
      data: "How to host a website? Beginner's guide!",
      description: 'Know the essential steps required for web hosting, right from domain name to server settings.',
    },
    {
      img: '/blog.png',
      data: "How to host a website? Beginner's guide!",
      description: 'Know the essential steps required for web hosting, right from domain name to server settings.',
    },
    {
      img: '/blog.png',
      data: "How to host a website? Beginner's guide!",
      description: 'Know the essential steps required for web hosting, right from domain name to server settings.',
    },
  ];
  return (
    <div className="container mt-4 flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center ">
        {data.map((item, index) => (
          <div key={index} className="w-11/12 max-w-md my-4">
            <div>
              <Image height={253} width={407} src={item.img} alt="hi" />
            </div>
            <div className="border flex flex-col gap-y-3 px-6">
              <h1 className="font-dmsans text-lg font-medium">{item.data}</h1>
              <p className="font-dmsans text-sm text-[#707070]">{item.description}</p>
              <div className="py-5">
                <button className="text-white px-3 py-2 bg-black">Read full blog</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Blogs;
