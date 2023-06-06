import { 
    SimpleGrid,
    Badge,    
} from "@chakra-ui/react";

export default function BoxObject() {
  return (
    <div className="flex h-full bg-slate-300 justify-center">
      <SimpleGrid columns={[1,1,1,2]} spacing={10} className="m-10 w-screen">
        {cards.map((card_items, index) => (
            <div key={index} className={`flex flex-col w-full h-full rounded-3xl  justify-center items-center gap-5 ${card_items.bg_color}`}>
                <div className="flex justify-center">
                    {card_items.tag.map((tag, tagIndex) => (
                        <div key={tagIndex}>
                            {tag.color.map((color, c_index) => (
                                <Badge className="mt-5" variant="solid" colorScheme={color} key={c_index}>
                                    {tag.tag_name[c_index]}
                                </Badge>
                            ))}
                        </div>
                    ))}
                </div>
                <h1 className={` text-5xl font-medium ${card_items.text_color}`}>{card_items.name}</h1>
                <div className={` w-3/4 text-center text-lg font-medium ${card_items.text_color}`}>{card_items.label}</div>
                <img src={card_items.image} className=' m-5 h-1/2'></img>
            </div>
        ))}
      </SimpleGrid>
    </div>
  );
}

const cards = [
  {
    name: 'MyCourses',
    label: 'View and manage all your classes in one place.',
    tag: [
      {
        tag_name: ['ICT', 'MAHIDOL'],
        color: ['cyan', 'blue'],
      },
    ],
    bg_color: 'bg-white',
  },
  {
    name: 'SmartEDU',
    label: 'All student services for Mahidol students are here, such as',
    tag: [
      {
        tag_name: ['MAHIDOL'],
        color: ['blue'],
      },
    ],
    bg_color: 'bg-white'
  },
  {
    name: 'Student Portal',
    label: 'All student services for Mahidol students are here, such as',
    tag: [
      {
        tag_name: ['ICT', 'MAHIDOL'],
        color: ['cyan', 'blue'],
      },
    ],
    bg_color: 'bg-white'
  },
  {
    name: 'Software Download',
    label: 'All software offers for Mahidol students can be downloaded here, including MATLAB, EndNote, IBM SPSS, ESET Smart Security, and Adobe Creative Cloud. Plus, there are many benefits from using Mahidol mail for signing in services, such as Notion, Figma, GitHub Student Developer Pack, StreamYard, JetBrains, and more!',
    tag: [
      {
        tag_name: ['MAHIDOL'],
        color: ['blue'],
      },
    ],
    bg_color: 'bg-gray-900',
    text_color: 'text-white',
    image: 'software_download.svg'
  },
  {
    name: 'Salaya Link',
    label: 'Shuttle bus from BTS Bangwa to Mahidol Salaya provided by College of Music, Mahidol University.',
    tag: [
      {
        tag_name: ['MUSIC','MAHIDOL'],
        color: ['green','blue'],
      },
    ],
    bg_color: 'bg-white',
    image: 'Sayink.svg'
  },
  {
    name: 'Air Quality Report',
    label: 'All software offers for Mahidol students can be downloaded here, including MATLAB, EndNote, IBM SPSS, ESET Smart Security, and Adobe Creative Cloud.',
    tag: [
      {
        tag_name: ['MAHIDOL'],
        color: ['blue'],
      },
    ],
    bg_color: 'bg-gray-900',
    text_color: 'text-white',
    image: 'AQI.svg'
  },
  {
    name: 'SmartEDU',
    label: 'All student services for Mahidol students are here, such as',
    tag: [
      {
        tag_name: ['MAHIDOL'],
        color: ['blue'],
      },
    ],
    bg_color: 'bg-white'
  },
];


