export const Footer = () => {
  return (
    <footer className="py-10 px-4 bg-card relative border-t border-border mt-12 pt-10 flex flex-wrap justify-between items-center">
      <div className="container mx-auto text-center">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Abel Thomas Babu. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};
