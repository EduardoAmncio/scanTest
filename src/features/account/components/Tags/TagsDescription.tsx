import React from "react";

interface TagsDetailProps {
    tag: string;
}

export const TagsDescription: React.FC<TagsDetailProps> = ({ tag }: TagsDetailProps) => {

    return (
        <div className="detailInfo-tags">
            <div> Suas TAGs </div>
            <strong> {tag} </strong>
        </div>

    );

};