const GoogleMap = () => {
  return (
    <div
      style={{ width: "100%", marginBottom: "20px" }}
      className="rounded-[12px] overflow-hidden md:h-[450px] h-[250px]"
    >
      <iframe
        className="h-full"
        width="100%"
        height="100%"
        frameBorder="0"
        style={{ border: 0, height: "100%" }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d382.50794077840845!2d-87.1868081!3d14.1008859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6fa2d94be1d8df%3A0x8aa3bd544e5fb6db!2sCentro%20Empresarial%2C%20Avenida%20Los%20Proceres%2C%20Tegucigalpa%2C%20Francisco%20Moraz%C3%A1n!5e0!3m2!1sen!2shn!4v1699924557896!5m2!1sen!2shn"
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      />
    </div>
  );
};

export default GoogleMap;
