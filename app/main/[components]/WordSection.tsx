import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function WordSection() {
  return (
    <section className="w-full my-2 py-2 px-3 sm:max-2xl:px-0 flex flex-col justify-between start">
      <div className="w-full font-bold text-[1.1rem] md:px-5">Today's Word</div>
      <Card className="w-full sm:max-2xl:w-[95%] sm:max-2xl:mx-auto my-3 bg-linear-to-br from-gray-50 to-gray-100">
        <CardHeader>
          <CardTitle>Tवचन, समझा गया</CardTitle>
          <CardDescription>श्लोक: योहन 1:1, मरकुस 16:20</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col justify-between gap-3 text-[#222]">
          <p>
            &quot;आदि में वचन था, और वचन परमेश्वर के साथ था, और वचन परमेश्वर था।d.&quot; - योहन 1:1
          </p>
          <p>
            &quot;और वे बाहर गए और हर जगह प्रचार किया, प्रभु उनके साथ कार्य कर रहे थे, और वचन को चिह्नों के साथ पुष्ट कर रहे थे। आमीन।.&quot; - मरकुस 16:20
          </p>
        </CardContent>
        <CardFooter>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="w-full">
                देखें
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuGroup>
                <DropdownMenuLabel>यह कार्रवाई अभी बीटा में है</DropdownMenuLabel>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
            </DropdownMenuContent>
          </DropdownMenu>
        </CardFooter>
      </Card>
    </section>
  );
}
