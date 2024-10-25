type WrapperProps = {
  condition: boolean;
  wrapper: (children: React.ReactNode) => React.ReactElement;
  children: React.ReactNode;
};

export const ConditionalWrapper = ({
  condition,
  wrapper,
  children,
}: WrapperProps) => (condition ? wrapper(children) : <>{children}</>);
