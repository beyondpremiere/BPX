import openai
import os
import tkinter as tk
from tkinter import filedialog

# Define the OpenAI API key
OPENAI_API_KEY = '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'

# Set up the OpenAI API key
openai.api_key = OPENAI_API_KEY

# Define the function to analyze file contents using GPT-3.5 Turbo
def analyze_file_contents(file_contents):
    # Send the contents to GPT-3.5 Turbo for analysis
    response = openai.Completion.create(
        engine="gpt-3.5-turbo",
        prompt=file_contents,
        max_tokens=100
    )
    # Extract and return the analysis results from the response
    return response['choices'][0]['text']

# Define the function to analyze the files in the selected folder
def analyze_folder():
    # Open a file dialog to select a folder
    folder_path = filedialog.askdirectory()
    # Loop through the files in the folder
    for file_name in os.listdir(folder_path):
        # Check the file extension
        file_extension = os.path.splitext(file_name)[-1].lower()
        if file_extension in ('.js', '.css'):
            # Construct the full file path
            file_path = os.path.join(folder_path, file_name)
            # Read the contents of the file
            with open(file_path, 'r') as file:
                file_contents = file.read()
                # Analyze the file contents and print the results
                analysis_results = analyze_file_contents(file_contents)
                print(f"Analysis results for {file_name}:\n{analysis_results}\n")

# Create the main Tkinter window
root = tk.Tk()
root.title("Folder Analyzer")

# Create a button to analyze the folder
analyze_button = tk.Button(root, text="Analyze Folder", command=analyze_folder)
analyze_button.pack()

# Run the Tkinter event loop
root.mainloop()

# Note: The code assumes you have set up the OpenAI API key and the openai Python library.
# Customize the "analyze_file_contents" function to perform the analysis you want.
# Replace 'your_openai_api_key' with your actual OpenAI API key.
