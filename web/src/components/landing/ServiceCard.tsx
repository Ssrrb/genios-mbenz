import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl?: string;
}

export default function ServiceCard({ title, description, imageUrl }: ServiceCardProps) {
  return (
    <div className="flex flex-col gap-3 pb-3">
      <div
        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
        style={{ backgroundImage: `url("${imageUrl}")` }}
      ></div>
      <div>
        <p className="text-[#141414] text-base font-medium leading-normal">{title}</p>
        <p className="text-neutral-500 text-sm font-normal leading-normal">{description}</p>
      </div>
    </div>
  );
}

