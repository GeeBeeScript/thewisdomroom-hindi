import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const MainPopQuestionsItem = () => {
  return (
    <Accordion type="single" collapsible defaultValue="shipping" className="">
      <AccordionItem value="shipping">
        <AccordionTrigger>क्या बाइबल विज्ञान द्वारा समर्थित है?</AccordionTrigger>
        <AccordionContent>
          बाइबल मुख्य रूप से एक आध्यात्मिक पुस्तक है। इसके कुछ ऐतिहासिक और प्राकृतिक विवरण विज्ञान से मेल खाते हैं, लेकिन इसका मुख्य उद्देश्य आध्यात्मिक सत्य बताना है, न कि वैज्ञानिक व्याख्या करना।
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="returns">
        <AccordionTrigger>
          क्या परमेश्वर, यीशु और पवित्र आत्मा एक ही हैं?
        </AccordionTrigger>
        <AccordionContent>
          एक ही परमेश्वर तीन व्यक्तियों (त्रित्व) में है — अलग-अलग व्यक्तित्व, लेकिन एक ही दिव्य स्वरूप।
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="support">
        <AccordionTrigger>प्रार्थना कैसे करनी चाहिए??</AccordionTrigger>
        <AccordionContent>
          प्रार्थना सच्चे मन और विनम्रता के साथ, विश्वास से करें — अक्सर उसी तरीके से जैसा यीशु ने सिखाया (मत्ती 6:9–13), जिसमें परमेश्वर का सम्मान करना, उसकी इच्छा को मानना और अपनी रोज़ की ज़रूरतों के लिए प्रार्थना करना शामिल है।
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default MainPopQuestionsItem;
