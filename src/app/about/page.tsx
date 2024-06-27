import Image from "next/image";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


export default function About() {
    return (
        <div className="flex flex-col gap-10 w-72 md:w-[30rem]">
            <h1 className="text-3xl font-bold">
                About GymAi
            </h1>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>Who are we?</AccordionTrigger>
                    <AccordionContent>
                        We are a team of fitness enthusiasts who are passionate about helping people achieve their fitness goals. Our mission is to make fitness accessible to everyone, regardless of their experience level or fitness goals. Created by Mario, Jhoan, and Ozami.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>What do we do?</AccordionTrigger>
                    <AccordionContent>
                        We provide personalized workout plans, nutrition advice, and fitness tips to help you reach your fitness goals. Our platform is designed to help you track your progress, stay motivated, and achieve real results.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>Why choose GymAi?</AccordionTrigger>
                    <AccordionContent>
                        GymAi is more than just a fitness app – it’s a community of like-minded individuals who are dedicated to helping each other succeed. With GymAi, you’ll have access to expert advice, personalized support, and a supportive community that will help you stay motivated and accountable.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
}