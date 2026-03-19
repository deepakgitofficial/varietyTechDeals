import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock } from "lucide-react";
import { BlogPost } from "@/types";
import { Card, CardContent, CardFooter, CardHeader } from "./card";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden group">
      <Link href={`/blog/${post.slug}`} className="block relative aspect-[16/9] overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
            {post.category}
          </span>
        </div>
      </Link>
      
      <CardHeader className="p-5 pb-0">
        <Link href={`/blog/${post.slug}`} className="hover:underline">
          <h3 className="text-xl font-bold tracking-tight line-clamp-2">
            {post.title}
          </h3>
        </Link>
      </CardHeader>
      
      <CardContent className="p-5 flex-1">
        <p className="text-muted-foreground text-sm line-clamp-3">
          {post.excerpt}
        </p>
      </CardContent>
      
      <CardFooter className="p-5 pt-0 mt-auto border-t">
        <div className="flex items-center justify-between w-full pt-4">
          <div className="flex items-center gap-2">
            <div className="relative w-8 h-8 rounded-full overflow-hidden">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                fill
                className="object-cover"
              />
            </div>
            <span className="text-sm font-medium">{post.author.name}</span>
          </div>
          
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span>{post.date}</span>
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
