interface Props {
    code: string;
    price: string;
}

const ItemPrice = ({ code, price }: Props) => {
    const itemPrice =
        (code === 'USD' && '$' + price) ||
        (code === 'EUR' && '€' + price) ||
        price + ' GBP';

    return <p className="item-price">{itemPrice}</p>;
}

export default ItemPrice;