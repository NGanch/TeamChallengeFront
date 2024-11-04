import { Title } from './SectionTitle.styled';

type Props = {
    title: string;
  };
  
 const SectionTitle = ({title}: Props) => {
  return <Title>{title}</Title>;
}

export default SectionTitle;