const ContactCard = ({ value, icon }: { value: string; icon: string }) => {
  return (
    <div>
      <div className="flex gap-4 rounded-xl items-center">
        <i className={icon + " text-3xl"}></i>
        <span className="text-lg">{value}</span>
      </div>
    </div>
  );
};

export default ContactCard;
