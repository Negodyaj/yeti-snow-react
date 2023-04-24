import './CategoriesGridItem.scss';

interface CategoriesGridItemProps {
  imageSrc: string;
  linkTitle: string;
  isWide: boolean;
  isAlignedToBottom: boolean;
}

export const CategoriesGridItem = (props: CategoriesGridItemProps) => {
  const { imageSrc, isAlignedToBottom, isWide, linkTitle } = props;
  const className = `grid-item ${isWide ? 'wide' : ''} ${isAlignedToBottom ? 'aligned-to-bottom' : ''}`;

  return (
    <div className={className}>
      <img src={imageSrc} alt="" />
      <a href="">{linkTitle}</a>
    </div>
  );
};
