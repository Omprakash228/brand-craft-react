import { CloseButton, Code, FileUpload, Input, InputGroup, Stack, type FileUploadFileAcceptDetails } from "@chakra-ui/react";
import type { FileChangeDetails } from "@zag-js/file-upload";
import { useState } from "react";
import { LuImage } from "react-icons/lu";

interface FileuploadProps {
    maxFiles: number;
    size?: "2xs" | "xs" | "sm" | "md" | "lg";
    width: string;
    info: string;
    onChange?: (value: File[]) => void;
    onClear?: () => void;
}

export default function Fileupload({
    maxFiles,
    size,
    width,
    info,
    onChange,
    onClear
}: FileuploadProps) {
    const [error, setError] = useState<string | null>(null)
    
    const handleChange = (value: FileUploadFileAcceptDetails) => {
        onChange?.(value.files);
    };
    const handleError = (value: FileChangeDetails) => {
        if (value.rejectedFiles.length > 0) {
            setError("File size exceeded")
        } else {
            setError(null)
        }
    }
    const handleClear = () => {
        onClear?.()
    }

    return (
        <>
            <Stack align="flex-start">
                <FileUpload.Root
                    gap="1"
                    width={width}
                    maxFiles={maxFiles}
                    onFileAccept={handleChange}
                    onFileChange={handleError}
                    accept={['image/jpeg', 'image/png', 'image/svg+xml']}
                    maxFileSize={5242880}>
                    <FileUpload.HiddenInput />
                    <FileUpload.Label>Optimal resolution: {info}</FileUpload.Label>
                    <InputGroup
                        startElement={<LuImage />}
                        endElement={
                            <FileUpload.ClearTrigger asChild onClick={handleClear}>
                                <CloseButton
                                    me="-1"
                                    size={size}
                                    variant="plain"
                                    focusVisibleRing="inside"
                                    focusRingWidth="2px"
                                    pointerEvents="auto"
                                />
                            </FileUpload.ClearTrigger>
                        }
                    >
                        <Input size={size} asChild>
                            <FileUpload.Trigger >
                                <FileUpload.FileText fallback={'Select image(upto 5MB)'} lineClamp={1} />
                            </FileUpload.Trigger>
                        </Input>
                    </InputGroup>
                </FileUpload.Root>
                {
                    error &&
                    <div style={{color: 'rgb(179, 22, 22)'}}>File size exceeded</div>
                }
            </Stack>
        </>
    )
}