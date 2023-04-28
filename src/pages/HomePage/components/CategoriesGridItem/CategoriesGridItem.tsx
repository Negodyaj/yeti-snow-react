import './CategoriesGridItem.scss';

export interface CategoriesGridItemProps {
  imageSrc: string;
  linkTitle: string;
  isWide: boolean;
  isAlignedToBottom: boolean;
}

export const CategoriesGridItem = (props: CategoriesGridItemProps) => {
  const { imageSrc, isAlignedToBottom, isWide, linkTitle } = props;
  const className = `grid-item ${isWide ? 'wide' : ''} ${isAlignedToBottom ? 'aligned-to-bottom' : ''}`;
  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    console.log('prevented');
  };

  return (
    <div className={className}>
      <img src={imageSrc} alt="" />
      <a href="" onClick={handleClick}>{linkTitle}</a>
    </div>
  );
};
