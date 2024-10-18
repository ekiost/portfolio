import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

import Link from 'next/link';
import { ExternalLink, Github } from 'lucide-react';

import { Project } from '@/types/project';

import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import TextReveal from '@/components/motion/text-reveal';

interface ProjectCardProps extends Project {
  title: string;
  description?: string;
  website?: string;
  github?: string;
  tags?: Array<{ label: string }>;
  className?: string;
}

function ProjectCard({
                       title,
                       description,
                       website,
                       github,
                       tags,
                       className
                     }: ProjectCardProps) {
  return (
    <Card
      className={cn(
        'relative flex h-full flex-col justify-between border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900',
        className
      )}
    >
      <CardContent className="p-4 md:p-6">
        <div className="grid gap-2">
          <h3 className="text-xl font-bold">
            <TextReveal>{title}</TextReveal>
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            <TextReveal>{description || ''}</TextReveal>
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {tags?.map((tag, index) => (
              <Badge key={`project-tag_${index}`}>{tag.label}</Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex items-center p-4 justify-around">
        {website && (
          <Button asChild>
            <Link href={website}>
              <ExternalLink size={16} />
              <span className="ml-1">View Site</span>
            </Link>
          </Button>
        )}
        {github && (
          <Button className="ml-2" asChild>
            <Link href={github}>
              <Github size={16} />
              <span className="ml-1">View Code</span>
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

export default ProjectCard;