import { Code,User } from "@nextui-org/react";
interface Data {
  id: string,
  name: string;
  urlImg: string;
  createTime: string;
  comment: string;
}

const data: Data[] = [
  {
    id: "EPL01",
    name: "D. Drogba",
    urlImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREIlkjFW_e_afxkrE8VY93B4xjW9bT1nhD-Q&usqp=CAU",
    createTime: "28/03/2024",
    comment: "Let go Da Nang",
  },
  {
    id: "EPL02",
    name: "P. Jones",
    urlImg: "https://i.imgur.com/gKzM4dub.jpg",
    createTime: "28/03/2024",
    comment: "Another time",
  },
  {
    id: "EPL03",
    name: "M. Baloteli",
    urlImg: "https://i.imgur.com/0MKRIBZb.jpg",
    createTime: "29/03/2024",
    comment: "Pick up your backpack",
  },
];

const Comment = () => {
  return <>
    <div className="w-full flex flex-wrap">
      {data.map((data: Data) =>
        <Code
          key={data.id}
          className="w-4/5 flex items-center bg-opacity-50  rounded p-2 my-2"
        >
          <img
            className="rounded-full w-10 h-10"
            src={data.urlImg}
            alt=""
          />
          <div>
            <div className="flex items-center space-x-1">
              <p className="text-xl font-semibold">{data.name}</p>
              <p className="opacity-50"> at {data.createTime}</p>
            </div>
            <div>{data.comment}</div>
          </div>
        </Code>
      )}
    </div>
  </>
    ;
};

export default Comment;
