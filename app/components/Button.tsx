type Props = {
    title: string
};

export default function Button({title}: Props){
    return (
        <button className="bg-secondary p-2 rounded text-white">{title}</button>
    );
}