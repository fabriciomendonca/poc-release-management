type LinkProps = {
  url: string;
  text: string;
};

export const Link = ({ url, text }: LinkProps) => (
  <div>
    <a href={url}>{text}</a>
  </div>
);
