"use client";
import { useEffect, useState } from "react";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Button } from "@nextui-org/button";
import { Avatar } from "@nextui-org/avatar";
import Slideshow from "@/components/SlideShow";
import EducationCard from "@/components/card4";
import ProductCard from "@/components/productCard";
import PhoneFrama from "@/components/phoneFrame";
import PhoneFrame from "@/components/phoneFrame";
import { Image } from "@nextui-org/image";
import { IoLogoInstagram } from "react-icons/io5";
import fkh from "@/public/images/f.jpg";
import { FaDownload, FaFacebook, FaWhatsapp, FaWpforms } from "react-icons/fa6";
// import { useNavigate } from 'react-router-dom';

export default function Home() {
  const texts = ["Graphic Designer", "Web Developer", "Racer"];
  // const colors = ["#0088FE", "#00C49F", "#FFBB28"];
  const colors = ["Developper", "Software Engineer", "Graphic Designer"];
  const [currentText, setCurrentText] = useState(texts[0]);
  const [index, setIndex] = useState(0);
  const delay = 2500;
  // const navigate = useNavigate();

  // interface SaveContactButtonProps {
  //   contactName: string;
  //   contactNumber: string;
  // }

  const contactName: string = "Fakhri AIA Agent";
  const contactNumber: string = "0129043200";
  const actionBtnColor = "secondary";
  const actionBtnVariant = "shadow";

  useEffect(() => {
    setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {};
  }, [index]);

  const handleSave = () => {
    // Create a vCard string
    const vCard = `
BEGIN:VCARD
VERSION:3.0
FN:${contactName}
TEL:${contactNumber}
END:VCARD
    `.trim();

    // Create a blob from the vCard string
    const blob = new Blob([vCard], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);

    // Create a link element and simulate a click to download the vCard file
    const a = document.createElement("a");
    a.href = url;
    a.download = `${contactName}.vcf`;
    document.body.appendChild(a);
    a.click();

    // Clean up
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  function handleWhatsapp() {
    // navigate("https://wa.link/exgurx");
  }

  useEffect(() => {
    // Function to change the text
    const changeText = () => {
      const currentIndex = texts.indexOf(currentText);
      const nextIndex = (currentIndex + 1) % texts.length;
      setCurrentText(texts[nextIndex]);
    };

    // Set an interval to change the text every 4 seconds
    const intervalId = setInterval(changeText, 5000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [currentText, texts]);

  return (
    <section className="grid gap-5 kalam-font">
      <header className="main-header ">
        <Avatar
          className="avatar-size absolute"
          isBordered
          radius="lg"
          src={fkh.src}
        />
        <img
          className="company-logo"
          src="https://seeklogo.com/images/A/aia-logo-618BFE8E96-seeklogo.com.png"
        />
      </header>
      <section className="grid gap-10 body-section">
        <section className="flex gap-3">
          <div className="mt-auto mb-auto grid">
            <h1 className={title()}>Nur Fakhri</h1>
            <h2 className="bio-title">Life Planner</h2>
            <p className="bio ">
              Expertly guiding financial strategies at the premier platform for
              professional connections.
            </p>
          </div>
        </section>

        {/* <Button className="bg-gradient-to-tr from-primary to-secondary">
        test
      </Button> */}
        <section className="mt-5">
          <div className="grid gap-4 justify-items-end">
            <div className="flex gap-3">
              <h1 className="action-label">Contact Me</h1>
              <div className="circle-btn">
                <a target="_blank" href="https://wa.link/exgurx">
                  <Button
                    size="lg"
                    isIconOnly
                    color={actionBtnColor}
                    onClick={handleWhatsapp}
                    variant={actionBtnVariant}
                  >
                    <FaWhatsapp size={35} />
                  </Button>
                </a>
              </div>
            </div>
            <div className="flex gap-3">
              <h1 className="action-label">Follow Me</h1>
              <div className="circle-btn">
                <a
                  target="_blank"
                  href="https://www.instagram.com/fkhrifzl?igsh=aWc2anI0ZGV1MXE2"
                >
                  <Button
                    size="lg"
                    isIconOnly
                    color={actionBtnColor}
                    variant={actionBtnVariant}
                  >
                    <IoLogoInstagram size={35} />
                  </Button>
                </a>
              </div>
            </div>
            <div className="flex gap-3">
              <h1 className="action-label">Follow Me</h1>
              <div className="circle-btn">
                <a
                  target="_blank"
                  href="https://www.facebook.com/share/ZfbsbUbjACccCMe9/"
                >
                  <Button
                    size="lg"
                    isIconOnly
                    color={actionBtnColor}
                    variant={actionBtnVariant}
                  >
                    <FaFacebook size={35} />
                  </Button>
                </a>
              </div>
            </div>
            <div className="flex gap-3">
              <h1 className="action-label">Free Quotation</h1>
              <div className="circle-btn">
                <Button
                  disabled
                  size="lg"
                  isIconOnly
                  color={actionBtnColor}
                  variant={actionBtnVariant}
                >
                  <FaWpforms size={35} />
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section>
          <Button
            className="text-black"
            size="lg"
            fullWidth
            color="secondary"
            onClick={handleSave}
          >
            Save Contact <FaDownload />
          </Button>
        </section>

        {/* <h1 className={title()}>Hello I'm&nbsp;</h1>
           <h1 className={title({ color: "violet" })}>Brian&nbsp;</h1>
           <br />
           <div className="flex ">
             <div className="grid">
               <h3 className={title()}>I'm a</h3>
             </div>
           </div> */}
      </section>
    </section>
  );
}
