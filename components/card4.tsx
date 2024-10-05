import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { FaArrowRightLong } from "react-icons/fa6";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/modal";
import 'animate.css';

interface EducationCardProps{
  data: EducationItem;
}
function EducationCard({data}: EducationCardProps) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  return (
    <div>
      <Card
        isFooterBlurred
        className="education-card animate__animated animate__slideInLeft"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className=" text-white uppercase font-bold">
            {data.uni_name}
          </p>
          <h4 className="text-white/60 font-medium text-xl">
            {data.batch}
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover"
          src={data.image}
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            {/* <Image
              alt="Breathing app icon"
              className="rounded-full w-10 h-11 bg-black object-contain"
              src="https://i.pinimg.com/originals/f9/f3/b2/f9f3b2349bc3889e4473fd440deb8def.png"
            /> */}
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">{data.name}</p>
              {/* <p className="text-tiny text-white/60">
                Get a good night's sleep.
              </p> */}
            </div>
          </div>
          <Button color="primary" radius="full" size="sm" onPress={onOpen}>
            Description
          </Button>
        </CardFooter>
      </Card>

      <Modal 
        isOpen={isOpen} 
        placement="center"
        onOpenChange={onOpenChange} 
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <ModalBody>
                <p> 
                 {data.description}
                </p>
                
              </ModalBody>
              <ModalFooter>
                {/* <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button> */}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      {/* <FaArrowRightLong /> */}
    </div>
  );
}


export default EducationCard