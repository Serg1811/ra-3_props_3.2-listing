interface Props {
    title: string;
}

const ItemTitle = ({ title }: Props) => {
    const itemTitle = title.length < 50 ? title : title.slice(0, 50) + '…';

    return <p className="item-title">{itemTitle}</p>;
}

export default ItemTitle;
