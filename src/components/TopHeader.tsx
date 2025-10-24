import React from "react";
import { CallIcon, EmailIcon, FacebookIcon, InstagramIcon, LinkedinIcon, LocationIcon, TwitterXIcon, YoutubeIcon,
  PinterestIcon, TikTokIcon,
 } from "@/icons";

const TopHeader = () => {
  return (
    <section className="bgpurple topHeader">
      <div className="container py-1">
        <div className="d-flex flex-wrap justify-content-between align-items-center">
          <div className="mx-auto mx-lg-0">
            <div className="contact_details d-md-flex gap-3">
              <div className="flex items-center gap-2">
                <CallIcon />
                <a className="text-decoration-none text-white" href="tel:+12672489454">
                  +1 (267) 248-9454
                </a>
              </div>
              <div className="text-center flex items-center gap-2">
                <LocationIcon />
                4492, 1007 N Orange St. 4th Floor , Wilmington, DE, New Castle, US, 19801
              </div>
              <div className="flex items-center gap-2">
                <EmailIcon />
                <a
                  className="text-decoration-none text-white"
                  href="mailto:info@kogents.ai"
                >
                  info@kogents.ai
                </a>
              </div>
            </div>
          </div>
          <div className="mx-auto mx-lg-0">
            <div className="social_media d-flex gap-3">
              <a
                target="_blank"
                href="https://www.linkedin.com/company/kogentsai/"
                aria-label="Linkedin"
              >
                <LinkedinIcon />
              </a>
              <a
                target="_blank"
                href="https://www.facebook.com/kogents/"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                target="_blank"
                href="https://x.com/kogentsai"
                aria-label="Twitter"
              >
                <TwitterXIcon />
              </a>
              <a
                target="_blank"
                href="https://www.youtube.com/@kogentsai"
                aria-label="Youtube"
              >
                <YoutubeIcon />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/kogentsai/"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                target="_blank"
                href="https://www.pinterest.com/kogentsai/"
                aria-label="Pinterest"
              >
                <PinterestIcon />
              </a>
              <a
                target="_blank"
                href="https://www.tiktok.com/@kogentsai"
                aria-label="TikTok"
              >
                <TikTokIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopHeader;
