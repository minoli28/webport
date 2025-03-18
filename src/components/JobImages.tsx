"use client";

import Link from "next/link";
import Image from 'next/image';
import { useState } from "react";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

import {
    Dialog,
    DialogTitle,
    DialogHeader,
    DialogTrigger,
    DialogContent,
    DialogDescription
} from "@/components/ui/dialog";

interface JobImagesProps {
    role: string;
    link: string;
    images: string[];
    duration: string;
}

export const JobImages = ({
    role,
    link,
    images,
    duration
}: JobImagesProps) => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setSelectedImage(images[(currentIndex + 1) % images.length]);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
        setSelectedImage(images[(currentIndex - 1 + images.length) % images.length]);
    };

    return (
        <div className="mt-4 flex space-x-2 overflow-x-auto pb-2 w-full">
            {images.map((img, idx) => (
                <Dialog key={idx}>
                    <DialogTrigger asChild>
                        <Image
                            src={img}
                            width={100}
                            height={100}
                            alt={`Project Image for ${role}`}
                            onClick={() => {
                                setSelectedImage(img);
                                setCurrentIndex(idx);
                            }}
                            className="cursor-pointer rounded-md border h-full w-auto shadow-md object-cover"
                        />
                    </DialogTrigger>
                    <DialogContent className="flex flex-col items-center">
                        <DialogHeader>
                            <DialogTitle>{role}</DialogTitle>
                            <DialogDescription>
                                {duration}
                            </DialogDescription>
                        </DialogHeader>
                        <div className="flex items-center justify-center w-full h-full">
                            <button
                                onClick={handlePrev}
                                className="absolute left-2 p-2 bg-white text-black rounded-full shadow-md hover:bg-gray-100">
                                <ChevronLeft className="size-6" />
                            </button>
                            <Image
                                width={400}
                                height={400}
                                src={selectedImage || ""}
                                alt={`Project Image for ${role}`}
                                className="rounded-md border shadow-md object-cover"
                            />
                            <button
                                onClick={handleNext}
                                className="absolute right-2 p-2 bg-white text-black rounded-full shadow-md hover:bg-gray-100">
                                <ChevronRight className="size-6" />
                            </button>
                        </div>
                        <Link href={link} target="_blank" className="text-sm flex items-center justify-center text-blue-600 hover:underline mt-2">
                            Visit Site
                            <ExternalLink className="size-4 ml-2" />
                        </Link>
                    </DialogContent>
                </Dialog>
            ))}
        </div>
    )
}