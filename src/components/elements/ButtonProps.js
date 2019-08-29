import styled from "vue-styled-components";

const typeButton = { primary: Boolean };

const CButtonProps = styled('button', typeButton)`
  font-size: 1em;
  text-align: center;
  color: ${props => props.primary ? '#0057AA' : '#FFFFFF'};
  border-radius: 5px;
  padding: 10px 15px;
  background-color: ${props => props.primary ? '#FFFFFF' : '#0057AA'};
`;

export default CButtonProps;