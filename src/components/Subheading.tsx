interface Props {
    title: string;
}
function Subheading({ title }: Props) {
    return <div className="subHeading">{title}</div>;
}
export default Subheading;
