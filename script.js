/**
 * PSY — VIRAL AI VIDEO CREATION TOOLKIT ENGINE
 * 1-click clipboard copy, prompt switching, video download helpers, and toast alerts.
 */

(function () {
  'use strict';

  const PROMPTS = {
    original: 'In the reference <<<video_1>>> Instead of 1st girl charecter who in the middle replace the <<<image_1>>> ,instead of 2nd girl who in the right side charecter replace the <<<image_2>>> , instead of 3rd girl left side charecter replace the <<<image_3>>>',
    enhanced: 'In reference video <<<video_1>>>, replace the middle girl with <<<image_1>>>, replace the girl on the right with <<<image_2>>>, and replace the girl on the left with <<<image_3>>>. Maintain seamless motion transfer, realistic lighting, and exact camera angles.'
  };

  let activePromptKey = 'original';

  // DOM Elements
  const copyPromptBtn = document.getElementById('copyPromptBtn');
  const copyPromptText = document.getElementById('copyPromptText');
  const mobileCopyBtn = document.getElementById('mobileCopyBtn');
  const promptDisplayBox = document.getElementById('promptDisplayBox');
  const tabOriginal = document.getElementById('tabOriginalPrompt');
  const tabEnhanced = document.getElementById('tabEnhancedPrompt');
  const downloadVideoBtn = document.getElementById('downloadVideoBtn');
  const toastContainer = document.getElementById('toastContainer');

  /**
   * Format prompt text for display with highlighted tags
   */
  function renderPromptText(text) {
    if (!promptDisplayBox) return;
    const formatted = text
      .replace(/<<<video_1>>>/g, '<span class="prompt-variable">&lt;&lt;&lt;video_1&gt;&gt;&gt;</span>')
      .replace(/<<<image_1>>>/g, '<span class="prompt-variable">&lt;&lt;&lt;image_1&gt;&gt;&gt;</span>')
      .replace(/<<<image_2>>>/g, '<span class="prompt-variable">&lt;&lt;&lt;image_2&gt;&gt;&gt;</span>')
      .replace(/<<<image_3>>>/g, '<span class="prompt-variable">&lt;&lt;&lt;image_3&gt;&gt;&gt;</span>');
    promptDisplayBox.innerHTML = formatted;
  }

  /**
   * Copy Active Prompt to Clipboard
   */
  function copyPrompt() {
    const textToCopy = PROMPTS[activePromptKey];

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(textToCopy).then(() => {
        handleCopySuccess();
      }).catch(() => {
        fallbackCopyText(textToCopy);
      });
    } else {
      fallbackCopyText(textToCopy);
    }
  }

  function fallbackCopyText(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      handleCopySuccess();
    } catch (err) {
      prompt('Copy the prompt manually:', text);
    }
    document.body.removeChild(textarea);
  }

  function handleCopySuccess() {
    // Desktop button state
    if (copyPromptBtn && copyPromptText) {
      copyPromptBtn.classList.add('copied');
      copyPromptText.textContent = 'Copied!';
      setTimeout(() => {
        copyPromptBtn.classList.remove('copied');
        copyPromptText.textContent = 'Copy Prompt';
      }, 2200);
    }

    // Mobile button state
    if (mobileCopyBtn) {
      const span = mobileCopyBtn.querySelector('span');
      if (span) {
        span.textContent = 'Copied!';
        mobileCopyBtn.classList.add('copied');
        setTimeout(() => {
          span.textContent = 'Copy Prompt';
          mobileCopyBtn.classList.remove('copied');
        }, 2200);
      }
    }

    showToast('Genjutsu Video Prompt copied to clipboard!');
  }

  /**
   * Toast Alert
   */
  function showToast(message) {
    if (!toastContainer) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
      <span>${message}</span>
    `;
    toastContainer.appendChild(toast);

    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 2800);
  }

  /**
   * Bind Events
   */
  function bindEvents() {
    if (copyPromptBtn) copyPromptBtn.addEventListener('click', copyPrompt);
    if (mobileCopyBtn) mobileCopyBtn.addEventListener('click', copyPrompt);

    if (tabOriginal) {
      tabOriginal.addEventListener('click', () => {
        activePromptKey = 'original';
        tabOriginal.classList.add('active');
        if (tabEnhanced) tabEnhanced.classList.remove('active');
        renderPromptText(PROMPTS.original);
      });
    }

    if (tabEnhanced) {
      tabEnhanced.addEventListener('click', () => {
        activePromptKey = 'enhanced';
        tabEnhanced.classList.add('active');
        if (tabOriginal) tabOriginal.classList.remove('active');
        renderPromptText(PROMPTS.enhanced);
      });
    }

    if (downloadVideoBtn) {
      downloadVideoBtn.addEventListener('click', () => {
        showToast('Starting reference video download (MP4)...');
      });
    }

    // Interactive Character Slot Upload Previews
    [1, 2, 3].forEach(slotNum => {
      const box = document.getElementById(`slotBox${slotNum}`);
      const input = document.getElementById(`fileInput${slotNum}`);
      const preview = document.getElementById(`previewImg${slotNum}`);

      if (box && input && preview) {
        box.addEventListener('click', () => {
          input.click();
        });

        input.addEventListener('change', (e) => {
          const file = e.target.files[0];
          if (file) {
            const reader = new FileReader();
            reader.onload = (loadEvent) => {
              preview.src = loadEvent.target.result;
              preview.style.display = 'block';
              showToast(`Character ${slotNum} photo loaded!`);
            };
            reader.readAsDataURL(file);
          }
        });
      }
    });

    // Keyboard shortcut (Ctrl + C when prompt box is focused)
    if (promptDisplayBox) {
      promptDisplayBox.addEventListener('click', () => {
        const range = document.createRange();
        range.selectNodeContents(promptDisplayBox);
        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
      });
    }
  }

  // Init
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bindEvents);
  } else {
    bindEvents();
  }
})();
