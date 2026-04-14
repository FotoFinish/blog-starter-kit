import Container from "@/app/_components/container";

type Props = {
  preview?: boolean;
};

const Alert = ({ preview }: Props) => {
  if (!preview) return null;

  return (
    <div className="border-b bg-neutral-800 border-neutral-800 text-white">
      <Container>
        <div className="py-2 text-center text-sm">
          Preview mode active.{" "}
          <a
            href="/api/exit-preview"
            className="underline hover:text-yellow-300 duration-200 transition-colors"
          >
            Click here
          </a>{" "}
          to exit.
        </div>
      </Container>
    </div>
  );
};

export default Alert;
